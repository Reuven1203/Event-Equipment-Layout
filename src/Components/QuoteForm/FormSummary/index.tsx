import React from 'react';
import {
    Box,
    Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow
} from '@mui/material';
import {useForm} from '../../../Contexts/FormContext';
import {usePackage} from '../../../Contexts/PackageContext';
import {packs} from '../../../lib/packages';
import {extraEquipment} from '../../../lib/extraEquipment';
import {eventTypes} from '../../../lib/eventTypes';
import SummarySection from './SummarySection';



const FormSummary = () => {
    const {formik} = useForm();
    const {selectedPackage} = usePackage();
    const values = formik.values;
    const mapSelectedPackageToPack = (selectedPackage:number) => {
        switch(selectedPackage) {
            case 0:
                return packs[0];
            case 1:
                return packs[1];
            case 2:
                return packs[2];
            case 3:
                return packs[3];
            default:
                return packs[0];
        }
    }
    const mapSelectedTypeToType = (selectedType: number) => {
        const eventType = eventTypes.find((eventType) => eventType.id === selectedType);

        if (eventType) {
            return eventType.name;
        } else {
            return 'Other';
        }
    };
    const mapSelectedExtraEquipmentToEquipment = (selectedExtraEquipment: number) => {
        const equipment = extraEquipment.find((equipment) => selectedExtraEquipment === equipment.id);
        if(equipment) {
            return equipment;
        } else {
            return {name: 'Other', price: 0}
        }
    }

    const totalExtraEquipmentCost = () => {
        let total = 0;
        values.extraEquipment.forEach((item: any) => {
            total += item.quantity * mapSelectedExtraEquipmentToEquipment(item.id).price;
        });
        return total;
    }

    const personalInfo = [
        {
            title: 'Name',
            value: values.name
        },
        {
            title: 'Email',
            value: values.email
        },
        {
            title: 'Phone',
            value: values.phone
        }
    ]
    const eventInfo = [
        {
            title: 'Date',
            value: values.date && values.date['$d'].toLocaleDateString()
        },
        {
            title: 'Time',
            value: values.date && values.date['$d'].toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        },
        {
            title: 'Type',
            value: mapSelectedTypeToType(values.type)
        },
        {
            title: 'Location',
            value: values.location
        },
        {
            title: 'Number of guests',
            value: `${values.guestRange[0]} - ${values.guestRange[1]}`
        }]
    return (
        <Paper className={'p-4 mt-3 max-h-[475px] max-sm:max-h-[525px] overflow-y-scroll overflow-y-visible'} elevation={2}>
            <h1 className={'w-full text-center'}>Summary</h1>
            <div className={'space-y-4 w-full mt-4'}>
                    <SummarySection values={personalInfo} sectionName={'Personal Info'}/>
                    <SummarySection values={eventInfo} sectionName={'Event Info'}/>
                <Divider className={'text-center font-bold text-2xl'}>Equipment</Divider>
                <Box>
                    <TableContainer component={Box}>
                        <h3><span className={'font-bold'}>Package :</span> {mapSelectedPackageToPack(selectedPackage).title}</h3>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{fontWeight:'bold'}} >
                                        <TableCell sx={{fontWeight:'bold'}}>Item</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {mapSelectedPackageToPack(selectedPackage).items.map((item:any) => (
                                    <TableRow
                                        key={item.name}
                                    >
                                        <TableCell component="th" scope="row">
                                            {item.name}
                                        </TableCell>
                                        <TableCell align="right">{item.quantity}</TableCell>
                                    </TableRow>
                                ))}


                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell align={'left'}><h3 className={'text-md font-bold'}>Estimated package price</h3></TableCell>
                                    <TableCell align={'right'}><h3 className={'text-lg'}>${mapSelectedPackageToPack(selectedPackage).price}</h3></TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                    <TableContainer  className={'mt-4'} component={Box}>
                        <h3 className={'font-bold'}>Extra Equipment</h3>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align={'left'}>Item</TableCell>
                                    <TableCell align={'right'}>Quantity</TableCell>
                                    <TableCell align={'right'}>Price</TableCell>
                                    <TableCell align={'right'}>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {values.extraEquipment.map((item : any) => (
                                    <>
                                        {item.quantity > 0 &&
                                            <TableRow
                                                key={item.id}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {item.name}
                                                </TableCell>
                                                <TableCell align={'right'}>{item.quantity}</TableCell>
                                                <TableCell align={'right'}>{mapSelectedExtraEquipmentToEquipment(item.id).price}</TableCell>
                                                <TableCell align={'right'}>{mapSelectedExtraEquipmentToEquipment(item.id).price * item.quantity}</TableCell>
                                            </TableRow>
                                        }
                                    </>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer>
                        <Table>
                            <TableFooter>
                                <TableRow>
                                    <TableCell align={'left'}><h3 className={'text-md'}>Extra Equipment Cost</h3> </TableCell>
                                    <TableCell align={'right'} sx={{fontWeight:'bold'}}><h3 className={'font-bold'}>${totalExtraEquipmentCost()}</h3></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align={'left'}><h3 className={'text-xl underline-offset-4 underline'}>Estimated Total Cost</h3></TableCell>
                                    <TableCell align={'right'}><h3 className={'font-bold text-xl'}>${totalExtraEquipmentCost() + mapSelectedPackageToPack(selectedPackage).price}</h3></TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </Box>
            </div>
        </Paper>
    );
};

export default FormSummary;