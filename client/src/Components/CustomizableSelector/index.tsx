import {FC, useEffect,useReducer} from 'react';
import {FormControlLabel,Checkbox, Rating} from '@mui/material';
import {Speaker,SpeakerGroup, Light, Fluorescent} from '@mui/icons-material';
import PackageSelectorCard from '../PackageSelector/PackageSelectorCard';

interface EquipmentState {
    checked: boolean;
    quantity: number;
}

type State = {
    [equipmentName: string]: EquipmentState;
};

// Action types
interface ToggleCheckAction {
    type: 'TOGGLE_CHECK';
    payload: {
        id: number;
    };
}

interface SetQuantityAction {
    type: 'SET_QUANTITY';
    payload: {
        id: number;
        quantity: number | null;
    };
}


type Action = ToggleCheckAction | SetQuantityAction;

const initialState = {
    0: {
        name: 'Speaker',
        checked: true,
        quantity: 1,
    },
    1: {
        name: 'Bass',
        checked: false,
        quantity: 0,
    },
    2: {
        name: 'Moving Head',
        checked: false,
        quantity: 0,
    },
    3: {
        name: 'Gigbar',
        checked: false,
        quantity: 0,
    }
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'TOGGLE_CHECK':
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    checked: !state[action.payload.id].checked,
                    quantity:1
                },
            };
        case 'SET_QUANTITY':
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    checked: true,
                    quantity: action.payload.quantity ?? 0,
                },
            };
        default:
            return state;
    }
};

const CustomizableSelector:FC<{isSelected:boolean, onClick: (index:number)=>void, submitForm: (values: any)=> void}> = (props) => {
    const screenW = window.innerWidth;
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        props.submitForm(state);
    }, [state]);

    const equipmentList = [{
        id: 0,
        name: 'Speaker',
        icon: <SpeakerGroup sx={{color:'white'}}/>,
        emptyIcon: <SpeakerGroup/>,
        min: 1,
        max:3,
    },
        {
            id: 1,
            name: 'Bass',
            icon: <SpeakerGroup sx={{color:'white'}}/>,
            emptyIcon: <SpeakerGroup/>,
            min: 0,
            max: state[0].quantity

        },
        {
            id: 2,
            name: 'Moving Head',
            icon: <Light sx={{color:'white'}}/>,
            emptyIcon: <Light/>,
            min: 0,
            max: 4


        },
        {
            id: 3,
            name: 'Gigbar',
            icon: <Fluorescent sx={{color:'white'}}/>,
            emptyIcon: <Fluorescent/>,

        }
    ];

    const handleCheckboxChange = (equipmentId: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'TOGGLE_CHECK',
            payload: {
                id: equipmentId
            },
        });
    };

    const handleRatingChange = (equipmentId: number) => (event: any, newValue: number | null) => {
        let finalValue = newValue;

        if (equipmentId === 0 && (!newValue || newValue < 1)) {  // Assuming the Speaker has id 0
            finalValue = 1;
        }

        dispatch({
            type: 'SET_QUANTITY',
            payload: {
                id: equipmentId,
                quantity: finalValue,
            },
        });
    };

    const onClickHandler = () => {
        if (screenW > 640) {
            props.onClick(100);
        }
    }

    return (
        <Card isSelected={props.isSelected} onClick={onClickHandler} isCustomize={true}>
            <h2 className={'w-full text-center align-middle'}>Customize</h2>
            <div className={'p-3 flex-col overflow-scroll'}>
                {equipmentList.map((equipment) => {
                        return (
                            <div key={equipment.id} className={'flex items-center'}>
                                <FormControlLabel  control={<Checkbox  checked={state[equipment.id]?.checked} onChange={equipment.id == 0 ? undefined :handleCheckboxChange(equipment.id)} sx={{
                                    color: 'white',
                                    '&.Mui-checked': {
                                        color: 'white',
                                    },
                                }}/>} name={equipment.name} id={equipment.name} label={equipment.name} />
                                <div>
                                    <Rating value={state[equipment.id].checked? state[equipment.id].quantity : 0} onChange={handleRatingChange(equipment.id)} name={equipment.name} max={equipment.max} icon={equipment.icon} emptyIcon={equipment.emptyIcon}   />
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        </Card>
    );
};

export default CustomizableSelector;