import { Component, For, JSX } from 'solid-js';
import styles from './Radio.module.css';
import { RadioGroup as KRadioGroup } from '@kobalte/core';
import { Text } from 'solid-i18n';

interface RadioGroupProps extends JSX.HTMLAttributes<HTMLDivElement> {
    name: string;
    options: any;
    value: string;
    setFields: any;
    defaultValue?: string | undefined;
}

const Radio: Component<RadioGroupProps> = ( props ) =>
{
    return (
        <KRadioGroup.Root
            class={styles.radio__group}
            defaultValue={props.defaultValue}
            value={props.value}
            name={props.name}
            onValueChange={( value ) => props.setFields( props.name, value, true )}
        >
            <div class={styles.radio__group__items}>
                <For each={props.options}>
                    {option => (
                        <KRadioGroup.Item value={option.value} class={styles.radio}>
                            <KRadioGroup.ItemInput class={styles.radio__input}/>
                            <KRadioGroup.ItemControl class={styles.radio__control}>
                                <KRadioGroup.ItemIndicator class={styles.radio__indicator}/>
                            </KRadioGroup.ItemControl>
                            <KRadioGroup.ItemLabel><Text message={option.label}/></KRadioGroup.ItemLabel>
                        </KRadioGroup.Item>
                    )}
                </For>
            </div>
        </KRadioGroup.Root>
    );
};

export default Radio;
