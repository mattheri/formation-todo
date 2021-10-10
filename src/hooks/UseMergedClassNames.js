import { useMemo } from 'react';

const mergeClassnames = ({ defaults, custom: classNames, variant }) => {
	const cn = (classNames?.split(' ') || []).concat([defaults, variant]).reverse();

	return cn.join(' ');
}

/**
 * Provides a hook to merge classnames with the default classname and the variant classname.
 * @param {Object} props - { defaultsClassNames, classNames, variantsMap, variant }
 * @returns string - merged classnames in a string
 */
const useMergedClassNames = (props) => {

	return useMemo(() => mergeClassnames(props), [props]);
}

export default useMergedClassNames;