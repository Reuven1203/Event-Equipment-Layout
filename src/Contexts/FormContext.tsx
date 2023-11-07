import {useFormik} from 'formik';
import {createContext, useContext} from 'react';
import {usePackage} from './PackageContext';

interface FormContextData {
    formik: any;
}


const FormContext = createContext<FormContextData>({} as FormContextData);

export const useForm = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useForm must be used within a FormProvider');
    }
    return context;
}

interface FormProviderProps {
    children?: React.ReactNode;
}

export const FormProvider = ({children}: FormProviderProps) => {
    const {selectedPackage} = usePackage();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            type: '',
            location: '',
            guestRange: [250,500],
            package: selectedPackage,


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

    return (
        <FormContext.Provider value={{formik}}>
            {children}
        </FormContext.Provider>
    );
}

export default FormContext;