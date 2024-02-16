import React, { createContext, useState, useContext, ReactNode, Context, Dispatch, SetStateAction } from "react";
import PropTypes from "prop-types";

interface AppContext {
    selectedDevWalletIndex: number;
    selectedIndex: number;
    selectStaking: number;
    setSelectedIndex?: Dispatch<SetStateAction<number>>;
    setSelectStaking?: Dispatch<SetStateAction<number>>;
    buyCryptoState: number;
    setBuyCryptoState?: Dispatch<SetStateAction<number>>;
    p2PState: number;
    setP2PState?: Dispatch<SetStateAction<number>>;
    depositState: number;
    setDepositState?: Dispatch<SetStateAction<number>>;
    orderBuyState: number;
    setOrderBuyState?: Dispatch<SetStateAction<number>>;
    orderSellState: number;
    setOrderSellState?: Dispatch<SetStateAction<number>>;
    developerHeader: number;
    playerHeader: number;
    setDeveloperHeader?: Dispatch<SetStateAction<number>>;
    setPlayerHeader?: Dispatch<SetStateAction<number>>;
    setSelectedDevWalletIndex?: Dispatch<SetStateAction<number>>;
    cartMenuClicked?: boolean;
    setCartMenuClicked?: Dispatch<SetStateAction<boolean>>;
    toggleCartClick?: () => void;
    addToCart?: boolean;
    setAddToCart?: Dispatch<SetStateAction<boolean>>;
    handleAddToCart?: () => void;
    handleCloseAddToCart?: () => void;
    userData?: any;
    setUserData?: Dispatch<SetStateAction<any>>;
    userImg?: any;
    setUserImg?: Dispatch<SetStateAction<any>>;
    tempData?: any;
    setTempData?: Dispatch<SetStateAction<any>>;
    type?: any ,
    setType?: Dispatch<SetStateAction<any>>,
    isUserLog?: boolean , 
    setIsUserLog?:Dispatch<SetStateAction<any>>
}

export const AppContext: Context<AppContext> = createContext<AppContext>({
    selectedDevWalletIndex: 1,
    selectedIndex: 1,
    selectStaking: 1,
    buyCryptoState: 1,
    p2PState: 1,
    depositState: 1,
    orderBuyState: 1,
    orderSellState: 1,
    developerHeader: 1,
    playerHeader: 1,
});

interface AppContextProviderProps {
    children: ReactNode;
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [selectedDevWalletIndex, setSelectedDevWalletIndex] = useState<number>(0);
    const [selectStaking, setSelectStaking] = useState<number>(0);
    const [buyCryptoState, setBuyCryptoState] = useState<number>(2);
    const [p2PState, setP2PState] = useState<number>(0);
    const [depositState, setDepositState] = useState<number>(0);
    const [orderBuyState, setOrderBuyState] = useState<number>(0);
    const [orderSellState, setOrderSellState] = useState<number>(0);
    const [developerHeader, setDeveloperHeader] = useState<number>(-1);
    const [playerHeader, setPlayerHeader] = useState<number>(-1);
    const [cartMenuClicked, setCartMenuClicked] = useState<boolean>(false);
    const [addToCart, setAddToCart] = useState<boolean>(false);
    const [userData, setUserData] = useState<any>({});
    const [userImg, setUserImg] = useState<any>('');
    const [tempData, setTempData] = useState<any>();
    const [type , setType] = useState<any>('');
    const [isUserLog , setIsUserLog] = useState<boolean>(false);

    const toggleCartClick = () => {
        setCartMenuClicked((prevCartClicked) => !prevCartClicked);
    };

    const handleAddToCart = () => {
        setAddToCart(true);
    };

    const handleCloseAddToCart = () => {
        setAddToCart(false);
    };

    return (
        <AppContext.Provider
            value={{
                selectedDevWalletIndex,
                selectedIndex,
                selectStaking,
                setSelectedIndex,
                setSelectStaking,
                buyCryptoState,
                setBuyCryptoState,
                p2PState,
                setP2PState,
                depositState,
                setDepositState,
                orderBuyState,
                setOrderBuyState,
                orderSellState,
                setOrderSellState,
                developerHeader,
                playerHeader,
                setDeveloperHeader,
                setPlayerHeader,
                setSelectedDevWalletIndex,
                cartMenuClicked,
                setCartMenuClicked,
                toggleCartClick,
                addToCart,
                setAddToCart,
                handleAddToCart,
                handleCloseAddToCart,
                userData,
                setUserData,
                userImg,
                setUserImg,
                tempData,
                setTempData,
                type , setType ,
                isUserLog , setIsUserLog
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppContextProvider;
export const useAppContext = (): AppContext => useContext(AppContext);
