import React from 'react';

export type ClockerCtx = {
    loading: boolean;
    setLoading: Function;
}

export const ClockerContext = React.createContext<ClockerCtx | null>(null);