import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';

const WYSIWYG = () => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

    useEffect(() => {
        console.log(content)
    }, [content])

	return (
		<JoditEditor
			ref={editor}
			value={content}
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={setContent}
		/>
	);
};

export default WYSIWYG