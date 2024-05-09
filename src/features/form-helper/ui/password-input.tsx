import { EyeIcon } from 'lucide-react';
import React, { FC, useState } from 'react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { IPasswordInputProps } from '../model';

export const PasswordInput: FC<IPasswordInputProps> = ({ field }) => {
    const [visible, setVisible] = useState<boolean>(false);
  
    return (
      <div className='relative'>
        <Input
          type={visible ? 'text' : 'password'}
          placeholder={field.placeholder}
          className='w-full'
        />
        <Button
          onClick={() => setVisible(!visible)}
          className='absolute top-0 right-0'
          variant='ghost'
          type='button'
          size='icon'
        >
          <EyeIcon />
        </Button>
      </div>
    );
  };