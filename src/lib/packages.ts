import {PackageModel} from './Models/packageModel';
import {equipment} from './Models/equipmentModel';
import {equipmentList} from './equipment';

const {speaker, microphone, booth, movingHead, bass, floorLights} = equipmentList;


const basic: PackageModel = {
    id: 1,
    packageName: 'Basic',
    equipment: [
        {
            equipment: speaker,
            quantity: 2
        },
        {
            equipment: booth,
            quantity: 1
        },
        {
            equipment: floorLights,
            quantity: 2
        }
        ]

}
