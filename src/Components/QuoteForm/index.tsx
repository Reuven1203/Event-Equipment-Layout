import {
    Button,
    Step,
    StepLabel, Stepper,
    TextField,
} from '@mui/material';
import {Person, Event, SpeakerGroup} from '@mui/icons-material';
import {useState} from 'react';
import {usePackage} from '../../Contexts/PackageContext';
import {useForm} from '../../Contexts/FormContext';
import PersonalInfoForm from './PersonalInfoForm';
import EventInfoForm from './EventInfoForm';
import EquipmentInfoForm from './EquipmentInfoForm';


const QuoteForm = () => {

    const [activeStep,setActiveStep] = useState(0);
    const {selectedPackage, onPackageSelect, openModalHandler} = usePackage();
    const {formik} = useForm();

    const formSteps = [
        {
            index: 0,
            icon: Person,
            error: formik.errors.name || formik.errors.email || formik.errors.phone

        },
        {
            index: 1,
            icon: Event,
            error: formik.errors.date || formik.errors.type || formik.errors.location
        },
        {
            index: 2,
            icon: SpeakerGroup,
            error: ''
        }
    ]
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const handleBack = () => {
        if(activeStep > 0){
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }else if(activeStep == 0) {
            openModalHandler(false);
        }
    }
    return (
        <div className={'w-full h-full'}>
                <h1 className={'text-center text-2xl font-bold'}>Get a quote</h1>
                <h2 className={'text-center'}>Fill out the following information</h2>
            <Stepper activeStep={activeStep} alternativeLabel sx={{marginTop:3}}>
                {formSteps.map((step) => (
                    <Step  key={step.index} active={activeStep === step.index} onClick={()=> setActiveStep(step.index)}>
                        <StepLabel sx={{'&:hover':{cursor :'pointer'}, color:'grey','.Mui-completed':{ color:'green'}, '.Mui-active':{color:'black', size:'large'}, '.Mui-error':{color:'red'}}} StepIconComponent={step.icon} error={activeStep > step.index && step.error != undefined}></StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className={'space-y-3 w-full px-4'}>
                {activeStep === 0 &&
                   <PersonalInfoForm/>
                }
                {activeStep ==1 &&
                   <EventInfoForm/>
                }
                {activeStep == 2 &&
                   <EquipmentInfoForm/>
                }
                </div>
            <div className={'flex w-full space-x-3 absolute bottom-0 left-0 p-3'}>
                <Button variant={'outlined'} className={'w-full'} onClick={handleBack}>Back</Button>
                <div className={'w-full'}>
                    {activeStep == 2 && Object.keys(formik.errors).length !=0 && <p className={'text-red-500 absolute bottom-12'}>Complete steps before proceeding</p>}
                    <Button disabled={activeStep == 2 && Object.keys(formik.errors).length !=0} variant={'contained'} className={'w-full'} onClick={handleNext}>Next</Button>
                </div>
            </div>
        </div>
    );
};

export default QuoteForm;