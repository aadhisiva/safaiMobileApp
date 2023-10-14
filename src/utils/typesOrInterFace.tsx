export interface SKTextInputI {
    label: String;
    placeholder: String;
};

export interface SKButtonI {
    name?: String;
    onPress?: () => void;
};

export interface routesPropsI {
    key?: any;
    name?: String;
    params?: String;
};

export interface MyTabBarCustomPropsI {
    state?: any;
    descriptors?: any;
    navigation?: any;
};

