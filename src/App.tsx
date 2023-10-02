import {useState} from 'react';
import './App.css';
import EquipmentComponent from './Components/Equipment/EquipmentComponent';
import PackageList from './Components/PackageList';



function App() {
    const [selectedPackage, setSelectedPackage] = useState(1);
    const onPackageSelect = (packageType: number) => {
        setSelectedPackage(packageType);
    }

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
          <div className={'h-full'}>
              <div className={'w-full h-[20%] flex text-center justify-center items-center text-white text-4xl'}>
                  BASSMENT EVENTS
              </div>
              <div className="w-full h-[30%] flex justify-center items-center">
                  {equipmentRender()}
              </div>
              <div className={'h-1/2 w-full'}>
                  <PackageList onPackageSelect={onPackageSelect}/>
              </div>
          </div>
      </div>

  );
}

export default App;
