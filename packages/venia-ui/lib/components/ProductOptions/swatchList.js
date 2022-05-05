import React, { useMemo } from 'react';
import { arrayOf, bool, func, object, shape, string } from 'prop-types';
import Swatch from './swatch';

import { useStyle } from '../../classify';
import defaultClasses from './swatchList.module.css';

const SwatchList = props => {
    const { getItemKey, selectedValue = {}, items, onSelectionChange, withLabels, text } = props;

    const classes = useStyle(defaultClasses, props.classes);

    const swatches = useMemo(
        () =>
            items.map(item => {
                const isSelected = item.label === selectedValue.label;

                return (
                    <div className={classes.container}>
                        <Swatch
                            key={getItemKey(item)}
                            isSelected={isSelected}
                            item={item}
                            onClick={onSelectionChange}
                        />
                        {withLabels && <span className={isSelected ? classes.label_selected : classes.label}>{item.label}</span>}
                    </div>
                );
            }),
        [getItemKey, selectedValue.label, items, onSelectionChange, withLabels]
    );

    return (
        <>
            {text && <p className={classes.text}>{text}</p>}
            <div className={classes.root}>{swatches}</div>
        </>
    );
};

SwatchList.propTypes = {
    classes: shape({
        root: string
    }),
    getItemKey: func,
    selectedValue: object,
    items: arrayOf(object),
    onSelectionChange: func,
    withLabels: bool,
    text: string,
};

SwatchList.defaultProps = {
    withLabels: false,
    text: ''
}

SwatchList.displayName = 'SwatchList';

export default SwatchList;
