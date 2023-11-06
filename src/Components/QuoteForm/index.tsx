import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Slider,
    Step,
    StepLabel, Stepper,
    TextField,
} from '@mui/material';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {useFormik} from 'formik';
import {Person, Event, SpeakerGroup} from '@mui/icons-material';
import ExtraEquipmentCard from './ExtraEquipmentGrid/ExtraEquipmentCard';
import {useState} from 'react';
import {usePackage} from '../../Contexts/PackageContext';
import ExtraEquipmentGrid from './ExtraEquipmentGrid';


const QuoteForm = () => {

    const [activeStep,setActiveStep] = useState(0);
    const {selectedPackage, onPackageSelect} = usePackage();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            type: '',
            location: '',
            guestRange: [250,500]

        },
        initialErrors: {
            name: 'Name is required',
            email: 'Email is required',
            phone: 'Phone is required',
            date: 'Date is required',
            type: 'Type is required',
            location: 'Location is required'
        },
        onSubmit: values => {
            console.log(values);
        },
        validate: values => {
           const errors: {
                name?: string,
                email?: string,
                phone?: string,
                date?: string,
                type?: string,
                location?: string
              } = {
           };
                if (!values.name) {
                    errors.name = "Name is required";
                }
                if (!values.email) {
                    errors.email = "Email is required";
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                    errors.email = "Invalid email format";
                }
                if (!values.phone) {
                    errors.phone = "Phone is required";
                }
                if (!values.date) {
                    errors.date = "Date is required";
                }
                if (!values.type) {
                    errors.type = "Type is required";
                }
                if (!values.location) {
                    errors.location = "Location is required";
                }
                return errors;
           }
    })
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
    const firstStepFields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
            value: formik.values.name,
            error: formik.errors.name
        },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            required: true,
            value: formik.values.email,
            error: formik.errors.email
        },
        {
            name: 'phone',
            label: 'Phone',
            type: 'text',
            required: true,
            value: formik.values.phone,
            error: formik.errors.phone
        }
    ]
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const handleBack = () => {
        if(activeStep > 0){
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
                    <div className={'w-full flex flex-col space-y-[20px] mt-6'}>
                        {firstStepFields.map((field) => {
                            return (
                                <>
                                    <TextField key={field.name} sx={{width:'100%'}} name={field.name} error={field.error != undefined}  label={field.label} variant='standard' onChange={formik.handleChange} value={field.value}/>
                                    {field.error && <p className={'text-red-500'}>{field.error}</p>}
                                </>
                            )
                        })}
                    </div>
                }
                {activeStep ==1 &&
                    <div className={'flex flex-col space-y-[30px] mt-7'}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker sx={{width:'100%'}} label="Date/Time of event" />
                            </LocalizationProvider>
                            <FormControl fullWidth>
                                <InputLabel>Type of event</InputLabel>
                                <Select
                                    label="Type of event"
                                >
                                    <MenuItem value={1}>Wedding</MenuItem>
                                    <MenuItem value={2}>Birthday</MenuItem>
                                    <MenuItem value={3}>Engagement/Henna party</MenuItem>
                                    <MenuItem value={3}>Bar/Bat Mitzvah</MenuItem>
                                    <MenuItem value={4}>Corporate event</MenuItem>
                                    <MenuItem value={5}>House party</MenuItem>
                                    <MenuItem value={6}>Other</MenuItem>
                                </Select>
                            </FormControl>
                        <TextField sx={{width:'100%'}}  label={'Location of event'} variant='standard'/>
                        <div className={'flex max-sm:flex-col sm:space-x-5'}>
                            <h4 className={'whitespace-nowrap text-center flex items-center'}>Number of guests &nbsp;<span>{formik.values.guestRange[0]} - {formik.values.guestRange[1]}</span></h4>
                            <Slider
                                sx={{width:'w-full'}}
                                min={50}
                                step={5}
                                max={1000}
                                disableSwap
                                aria-valuetext={'guests'}
                                valueLabelDisplay={'auto'}
                                valueLabelFormat={(value) => `${value} guests`}
                                value={formik.values.guestRange}
                                onChange={(event, value) => formik.setFieldValue('guestRange', value)}
                            />
                        </div>
                    </div>
                }
                {activeStep == 2 &&
                    <div className={'flex flex-col space-y-[30px] mt-7'}>
                        <FormControl fullWidth>
                            <InputLabel>Package</InputLabel>
                            <Select
                                label="Package"
                                value={selectedPackage}
                                onChange={(event) => onPackageSelect(Number(event.target.value))}
                            >
                                <MenuItem value={0}>Basic</MenuItem>
                                <MenuItem value={1}>Standard</MenuItem>
                                <MenuItem value={2}>Deluxe</MenuItem>
                            </Select>
                            </FormControl>
                        <h1>Extra Equipment</h1>
                        <ExtraEquipmentGrid/>
                        <TextField sx={{width:'100%'}}  label={'Additional information'} variant='standard'/>
                    </div>
                }
                </div>
            <div className={'flex w-full space-x-3 absolute bottom-0 left-0 p-3'}>
                <Button variant={'outlined'} className={'w-full'} onClick={handleBack}>Back</Button>
                <Button variant={'contained'} className={'w-full'} onClick={handleNext}>Next</Button>
            </div>
        </div>
    );
};

export default QuoteForm;