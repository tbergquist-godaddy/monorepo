import { Button, Box } from '@tbergq/components';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import useToggle from 'components/hooks/use-toggle';
import { useRouter } from 'next/router';

export default function ActionBar(): JSX.Element {
  const {
    models: { isOn },
    operations: { toggle },
  } = useToggle(true);
  const { back } = useRouter();
  return (
    <Box display="flex" gap="normal">
      <Button onClick={() => back()} color="secondary">
        Back
      </Button>
      <Button
        ariaLabel={isOn ? 'Mark as watched' : 'Mark as not watched'}
        onClick={toggle}
        color={isOn ? 'success' : 'danger'}
      >
        {isOn ? <MdVisibility /> : <MdVisibilityOff />}
      </Button>
    </Box>
  );
}
