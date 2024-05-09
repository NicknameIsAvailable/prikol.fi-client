import React, { FC } from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { IFormHelperProps } from '../model';
import { PasswordInput } from './password-input';

export const FormHelper: FC<IFormHelperProps> = ({ fields, form }) => {

    return fields.map(field => 
        <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={() => (
                <FormItem>
                    <FormLabel>{field.label}</FormLabel>
                    <FormControl>
                        {field.type === 'password' ? (
                            <PasswordInput field={field} />
                        ) : (
                            <Input 
                                {...form.register(String(field.name), field.rules)}
                                type={field.type}
                                placeholder={field.placeholder}
                                className='w-full'
                            />
                        )}
                    </FormControl>
                    {form.formState.errors[String(field.name)] && (
                        <FormMessage>
                        {String(form.formState.errors[String(field.name)]?.message)}
                        </FormMessage>
                    )}
                </FormItem>
            )}
        />
    )
};
