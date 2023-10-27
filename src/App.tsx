import {useState} from 'react';
import './App.css';
import EquipmentComponent from './Components/Equipment/EquipmentComponent';
import PackageList from './Components/PackageList';
import {usePackage} from './Contexts/PackageContext';
//import favicon
import logo from './DJLOGO.png'



function App() {
    const {onPackageSelect, selectedPackage} = usePackage();
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
                    <EquipmentComponent component='BoothWithLights'/>
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
                    <EquipmentComponent component='BoothWithLights'/>
                    <EquipmentComponent component='SpeakerWithBass'/>
                    <EquipmentComponent component={'MovingHead'}/>
                    <EquipmentComponent component='Speaker'/>
                </>
            )
        }
    }

  return (
      <div className={'background'}>
         <div className={'h-screen overflow-scroll w-full flex flex-col items-center'}>
             <div className={'w-full'}>
                 <a href={'http://www.djreuven.com'}><img width={110} height={100} src={logo}/></a>
                 <div className={'w-full p-5 text-center  text-white text-4xl font-medium'}>
                     BASSMENT EVENTS
                 </div>
             </div>
              <div className="h-[30%] sm:rounded-2xl w-fit p-5 items-center p-5  shadow-md shadow-white flex sm:space-x-auto justify-center bg-[#F4FDFF]">
                      {equipmentRender()}
              </div>
              <div className={'bottom-half'}>
                  <h1 className={' text-white w-full text-center font-bold text-3xl p-3'}>Select a package</h1>
                      <PackageList onPackageSelect={onPackageSelect}/>
              </div>
          </div>
      </div>

  );
}

export default App;
