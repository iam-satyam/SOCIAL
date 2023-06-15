import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../PostShare/PostShare';


function ShareModal({modalopenend,setModalOpened}) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  

  return (
    <>
      <Modal
        opened={modalopenend}
        onClose={()=>setModalOpened(false)}
        size='55%'
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
          
        }}
      >
      <PostShare/>
      
        {/* Modal content */}
      </Modal>

      
    </>
  );
}
export default ShareModal