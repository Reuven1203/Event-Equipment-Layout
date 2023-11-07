import {PackageModel} from './Models/packageModel';
import {equipmentList} from './equipment';

const {speaker,  booth, movingHead, bass} = equipmentList;


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
        ]

}
