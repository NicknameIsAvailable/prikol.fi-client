"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { EditProfileModal } from '@/features/edit-profile-modal';
import { LogoutModal } from '@/features/logout-modal';
import { getAccessToken, useAuthStore } from '@/entities/auth';

export const ProfilePage = () => {
    const { nickname, email, getProfile } = useAuthStore();
    const accessToken = getAccessToken();
    const router = useRouter()

    if (!accessToken) router.replace('/auth/login');

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <div className="mt-20 flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                {nickname}
            </h1>
            <h2 className="text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                {email}
            </h2>
            <div className="flex gap-2">
                <LogoutModal />
                <EditProfileModal />
            </div>
        </div>
    );
};
