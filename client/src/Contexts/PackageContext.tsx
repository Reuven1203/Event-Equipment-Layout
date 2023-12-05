import React, {createContext, FC} from 'react';

interface PackageContextProps {
    selectedPackage: number;
    onPackageSelect: (packageType: number) => void;
    isModalOpen: boolean;
    openModalHandler: (open:boolean) => void;
}

const PackageContext = createContext({} as PackageContextProps);

export const usePackage = () => {
    const context = React.useContext(PackageContext);
    if (!context) {
        throw new Error('usePackage must be used within a PackageProvider');
    }
    return context;
}

interface PackageProviderProps {
    children?: React.ReactNode;
}

export const PackageProvider: FC<PackageProviderProps> = ({children}) => {
    const [selectedPackage, setSelectedPackage] = React.useState(0);
    const [openModal, setOpenModal] = React.useState(false);

    const onPackageSelect = (packageType: number) => {
        setSelectedPackage(packageType);
    }

   const openModalHandler = (open:boolean) => {
        setOpenModal(open);
    }

    const value: PackageContextProps = {
        selectedPackage,
        onPackageSelect,
        openModalHandler,
        isModalOpen: openModal

    }


    return (
        <PackageContext.Provider value={value}>
            {children}
        </PackageContext.Provider>
    );
};

export default PackageContext;