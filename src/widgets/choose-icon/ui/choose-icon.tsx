"use client"

import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/shared/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover"
import { ChevronsUpDown } from "lucide-react"
import { useState } from "react"
import { Icon } from "@/widgets/icon"
import * as icons from 'lucide-react';

export const ChooseIcon = () => {
    const allIcons = Object.keys(icons).filter((key) => !key.startsWith("Lucide") || !key.endsWith("Icon")) as Array<keyof typeof icons>

    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
                >
                    Select framework...
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                <CommandInput placeholder="Search framework..." />
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                    {allIcons.map(icon =>
                        <CommandItem key={icon}>
                            <Icon name={icon}/>
                        </CommandItem>
                    )}
                </CommandGroup>
                </Command>
            </PopoverContent>
            </Popover>
    )
}