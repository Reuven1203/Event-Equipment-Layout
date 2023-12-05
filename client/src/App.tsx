import EquipmentComponent from './Components/Equipment/EquipmentComponent';
import QuoteModal from './Components/QuoteModal';
import PackageList from './Components/PackageList';
import {usePackage} from './Contexts/PackageContext';
import {FormProvider} from './Contexts/FormContext';
//import favicon
import logo from './DJLOGO.png'
import {Box, Divider, Icon, Link, Paper, Typography} from '@mui/material';
import {GitHub,LinkedIn} from '@mui/icons-material';
import {useTheme} from '@mui/material';




function App() {
    const {onPackageSelect, selectedPackage} = usePackage();
    const {palette} = useTheme();
    const footerLinks = [
        {
            name: 'Github',
            icon: <GitHub />,
            url: 'https://github.com/Reuven1203',
        },
        {
            name: 'LinkedIn',
            icon: <LinkedIn />,
            url: 'https://www.linkedin.com/in/reuven-ostrofsky/',
        },
    ]
    const equipmentRender = () => {
        if(selectedPackage === 0) {
            return (
                <>
                    <EquipmentComponent component='Speaker'/>
                    <EquipmentComponent component='Booth'/>
                    <EquipmentComponent component={'Speaker'}/>
                </>
            )
        }
        else if(selectedPackage === 1) {
            return (
                <>
                    <EquipmentComponent component='SpeakerWithBass'/>
                    <EquipmentComponent component='Booth'/>
                    <EquipmentComponent component={'SpeakerWithBass'}/>
                </>
            )
        }
        else if(selectedPackage === 2) {
            return (
                <>
                    <EquipmentComponent component='Speaker'/>
                    <EquipmentComponent component={'MovingHead'}/>
                    <EquipmentComponent component='SpeakerWithBass'/>
                    <EquipmentComponent component='Booth'/>
                    <EquipmentComponent component='SpeakerWithBass'/>
                    <EquipmentComponent component={'MovingHead'}/>
                    <EquipmentComponent component='Speaker'/>
                </>
            )
        }
    }

  return (
      <Box
          sx={{background: `linear-gradient(180deg, ${palette.primary.main} 0%, ${palette.primary.light} 100%)`, overflow:'hidden'}}
          className={'flex justify-center align-middle items-center'}
      >
          <FormProvider>
          <QuoteModal/>
          </FormProvider>
          <Box className={'h-screen overflow-scroll w-full flex flex-col items-center'}>
                 <Typography variant={'h1'} className={'w-full p-5 text-center'}>
                     INDUSTRY NAME HERE
                 </Typography>
              <Box className="h-[25%] max-sm:min-h-[30%] max=lg:rounded-2xl w-fit max-lg:w-full p-5 items-center p-5  shadow-sm shadow-black flex sm:space-x-auto justify-center">
                      {equipmentRender()}
              </Box>
              <Box className={'mt-6 h-full w-full'}>
                  <Typography variant={'h3'}   className={'w-full text-center max-sm:p-3'}>Select a package</Typography>
                      <PackageList onPackageSelect={onPackageSelect}/>
              </Box>
             <Box component={'footer'} className={' w-full text-center p-3 flex text-white justify-center space-x-3'}>
                 <Typography sx={{color:palette.primary.dark}} variant={'subtitle1'}>Created By Reuven Ostrofsky</Typography>
                 <Box className={'space-x-3'}>
                     {footerLinks.map((link) => {
                         return (
                             <Link  href={link.url} target={'_blank'}>{link.icon}</Link>
                         )
                     })}
                 </Box>
             </Box>
          </Box>
      </Box>

  );
}

export default App;
