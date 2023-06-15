import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme } from '@mantine/core';


function ProfileModal({modalopenend,setModalOpened}) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  

  return (
    <>
      <Modal
        opened={modalopenend}
        onClose={()=>setModalOpened(false)}
        size='55%'
        title="WELCOME !!! Now edit your information..."
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
          
        }}
      >
      <form className="infoForm">
        <h3>YOUR INFORMATION....</h3>
        <div>
            
        <input type='text' className='infoInput' name='Firstname' placeholder='First Name'></input>
        <input type='text' className='infoInput' name='Lastname' placeholder='Last Name'></input>
        </div>
        <div>
        <input type='text' className='infoInput' name='worksAT' placeholder='Works at '></input>
        </div>
        <div>
        <input type='text' className='infoInput' name='livesIN' placeholder='LIVES IN'></input>
        <input type='text' className='infoInput' name='Country' placeholder='Country'></input>
        </div><div>
        <input type='text' className='infoInput' placeholder='Relationship Status'></input>
        </div>
        <div>
            Profile Image
            <input type='file' name='profileImg'/>
            Cover Image
            <input type='file' name='coverImg'/>
        </div>
        <button className='button infoButton'>Update</button>
      </form>
        {/* Modal content */}
      </Modal>

      
    </>
  );
}
export default ProfileModal