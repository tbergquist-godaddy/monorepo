// @flow strict

export type WorkspaceDependencies = {
  [string]: {|
    +location: string,
    +workspaceDependencies: $ReadOnlyArray<string>,
    +mismatchedWorkspaceDependencies: $ReadOnlyArray<string>,
  |},
  ...,
};

export default function findRelatedWorkspaceLocations(
  workspaceDependencies: WorkspaceDependencies,
  rootWorkspaceName: string,
): $ReadOnlySet<string> {
  const locations = new Set();

  (function recurse(workspaceName) {
    const workspace = workspaceDependencies[workspaceName];
    const workspaceLocation = workspace.location;
    locations.add(workspaceLocation);

    for (const directDependencyName of workspace.workspaceDependencies) {
      const directDependency = workspaceDependencies[directDependencyName];
      if (!locations.has(directDependency.location)) {
        recurse(directDependencyName);
      }
    }

    for (const mismatchedDependencyName of workspace.mismatchedWorkspaceDependencies) {
      const mismatchedDependency = workspaceDependencies[mismatchedDependencyName];
      if (!locations.has(mismatchedDependency.location)) {
        recurse(mismatchedDependencyName);
      }
    }
  })(rootWorkspaceName);

  return locations;
}
