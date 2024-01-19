'use client';

import React, { useContext } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TodoContext } from '@/components/providers/currency-context';

const SwitchCurrency = () => {
    const { setCurrency } = useContext(TodoContext);

    return (
        <Select onValueChange={(value) => setCurrency(value)} defaultValue="USD">
            <SelectTrigger className="w-[180px]">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="IDR">IDR</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default SwitchCurrency;
