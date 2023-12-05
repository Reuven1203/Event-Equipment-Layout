import {
    Box,
    Button,
    Step,
    StepLabel, Stepper,
    TextField, Typography,
} from '@mui/material';
import {Person, Event, SpeakerGroup, Receipt} from '@mui/icons-material';
import {useState} from 'react';
import {usePackage} from '../../Contexts/PackageContext';
import {useForm} from '../../Contexts/FormContext';
import PersonalInfoForm from './PersonalInfoForm';
import EventInfoForm from './EventInfoForm';
import EquipmentInfoForm from './EquipmentInfoForm';
import FormSummary from './FormSummary';
import {useTheme} from '@mui/material';


const QuoteForm = () => {

    const [activeStep,setActiveStep] = useState(0);
    const {selectedPackage, onPackageSelect, openModalHandler} = usePackage();
    const {formik} = useForm();
    const {palette} = useTheme();

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
        },
        {
            index: 3,
            icon: Receipt,
        }
    ]
    const handleNext = () => {
           if(activeStep == formSteps.length - 1) {
                return
            }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const handleBack = () => {
        if(activeStep > 0){
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }else if(activeStep == 0) {
            openModalHandler(false);
        }
    }

    const handleStepClick = (index: number) => {
        if (index == formSteps.length - 1) {
            if(Object.keys(formik.errors).length > 0) {
                return
            }
        }
            setActiveStep(index);


    }
    return (
        <Box  className={'w-full h-full'}>
                <Typography variant={'h3'} sx={{color:palette.text.primary}} className={'text-center'}>Get a quote</Typography>
                <Typography sx={{color:palette.text.primary}} className={'text-center'}>Fill out the following information</Typography>
            <Stepper activeStep={activeStep} alternativeLabel sx={{marginTop:3}}>
                {formSteps.map((step) => (
                    <Step  key={step.index} active={activeStep === step.index} onClick={() => handleStepClick(step.index)}>
                        <StepLabel sx={{'&:hover':{cursor :'pointer'}, color:palette.primary.light,'.Mui-completed':{ color:palette.success.main}, '.Mui-active':{color:palette.primary.dark, size:'large'}, '.Mui-error':{color:palette.error.main}}} StepIconComponent={step.icon} error={activeStep > step.index && step.error != undefined}></StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box className={'space-y-3 w-full px-4'}>
                {activeStep === 0 &&
                   <PersonalInfoForm/>
                }
                {activeStep ==1 &&
                   <EventInfoForm/>
                }
                {activeStep == 2 &&
                   <EquipmentInfoForm/>
                }
                {
                    activeStep == 3 &&
                    <FormSummary/>
                }
                </Box>
            <Box className={'flex w-full space-x-3 absolute bottom-0 left-0 p-3'}>
                <Button variant={'outlined'} className={'w-full'} onClick={handleBack}>Back</Button>
                <Box className={'w-full'}>
                    {activeStep == 2 && Object.keys(formik.errors).length !=0 && <p className={'text-red-500 absolute bottom-12'}>Complete steps before proceeding</p>}
                    <Button disabled={activeStep == 2 && Object.keys(formik.errors).length !=0} variant={'contained'} className={'w-full'} onClick={handleNext}>{activeStep == formSteps.length-1 ? 'Complete' : 'Next'}</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default QuoteForm;