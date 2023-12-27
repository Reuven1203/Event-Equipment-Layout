import {PackageModel} from './Models/packageModel';
import {equipmentList} from './equipment';

const {speaker,  booth, movingHead, bass} = equipmentList;

const totalPackagePrice = (pack : any) => {
    return pack.reduce((acc : any, item : any) => {
        return acc + (item.price * item.quantity);
    }, 0)
}

const basicPackBasePrice = 525;
const standardPackBasePrice = 675;
const deluxePackBasePrice = 1725;


const basicPack = [
    {
        name: speaker.name,
        price: speaker.price,
        quantity: 2
    },
    {
        name: booth.name,
        price: booth.price,
        quantity: 1
    }
];
const standardPack = [
    {
        name: speaker.name,
        price: speaker.price,
        quantity: 2
    },
    {
        name: booth.name,
        price: booth.price,
        quantity: 1
    },
    {
        name: bass.name,
        price: bass.price,
        quantity: 2
    }
];

const deluxePack = [
    {
        name: speaker.name,
        price: speaker.price,
        quantity: 4,
    },
    {
        name: booth.name,
        price: booth.price,
        quantity: 1
    },
    {
        name: bass.name,
        price: bass.price,
        quantity: 2
    },
    {
        name: movingHead.name,
        price: movingHead.price,
        quantity: 2
    },
]

interface items {
    name: string;
    price: number;
    quantity: number;
}

interface Package {
    index: number;
    title: string;
    items: items[];
    basePrice: number;
    price: number;
}
 export const packs: Package[] = [
    {
        index: 0,
        title: 'Basic',
        items: basicPack,
        basePrice: basicPackBasePrice,
        price: totalPackagePrice(basicPack) + basicPackBasePrice
    },
    {
        index: 1,
        title: 'Standard',
        items: standardPack,
        basePrice: standardPackBasePrice,
        price: totalPackagePrice(standardPack) + standardPackBasePrice
    },
    {
        index: 2,
        title: 'Deluxe',
        items: deluxePack,
        basePrice: deluxePackBasePrice,
        price: totalPackagePrice(deluxePack) + deluxePackBasePrice
    },
]
