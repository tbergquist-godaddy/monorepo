# Git aliases

I like using the terminal when working with git. It gives me access to more commands that I cannot get from the typical git UI clients.
I have a set of aliases that makes this easier: 

```text
    co = checkout
    ec = config --global -e
    up = !git pull --rebase --prune $@ && git submodule update --init --recursive
    cob = checkout -b
    cm = !git add -A && git commit -m
    save = !git add -A && git commit -m 'SAVEPOINT' -n
    wip = !git add -u && git commit -m "WIP"
    undo = reset HEAD~1 --mixed
    amend = !git add -A && git commit -a --amend
    wipe = !git add -A && git commit -qm 'WIPE SAVEPOINT' -n && git reset HEAD~1 --hard
    bclean = "!f() { git branch --merged ${1-master} | grep -v " ${1-master}$" | xargs -r git branch -d; }; f"
    bdone = "!f() { git checkout ${1-master} && git up && git bclean ${1-master}; }; f"
    st = status
    me = merge
    delb = branch -D
    down = !git pull && git fetch --prune
    opendiff = mergetool --tool=opendiff
    re = rebase -i
    rem = rebase -i master
    cln = clean -fdx
    interactive = "!f() { git rebase --interactive HEAD~${1-master}; }; f"
    bra = branch
    brar = branch -r
    ignored = !git ls-files -v | grep "^[[:lower:]]"
    fixup = "!f() { TARGET=$(git rev-parse "$1"); git commit --fixup=$TARGET ${@:2} && EDITOR=true git rebase -i --autostash --autosquash $TARGET^; }; f"
```

Most of these are so I don't have to type so much. Others because they make working with git better.

### git wipe

Did you ever work on somehting, the do `git reset --hard`, your changes are gone, then you remember there was this piece of code you wanted after all 😓.
With `git wipe`, no problem, you can find your changes doing `git reflog`, since it commits your unstaged changes before resetting 😻

### git save

Because I don't like to stash my changes when switching branches. I rather do a commit called `SAVEPOINT`. I know this should not me merged, and I will use `git undo` when I switch back to this branch.

### git undo

Removes the latest commit, without throwing away the changes. 

### git fixup

When you want to ammend some changes to a commit other than head on you branch, you can use it like `git fixup <commit_hash>` and it will commit your changes to that commit
