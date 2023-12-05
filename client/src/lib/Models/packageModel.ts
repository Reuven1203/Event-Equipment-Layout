import { equipment } from './equipmentModel';
type globalEquipment = {
    equipment: equipment;
    quantity: number;
}
export interface PackageModel {
    id: number;
    packageName: string;
    equipment: globalEquipment[];

}