/*
 * @Author: gary 
 * @Date: 2020-08-06 17:43:23 
 * @Last Modified by: gary
 * @Last Modified time: 2020-08-17 11:27:19
 */
import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Wrap from './Wrap';

interface ProtalOptions {
	closeOnOutSide?: boolean,
	className?: string,
	rootContainer?: HTMLElement,
	defaultShow?: boolean
}

const useProtal = ({ closeOnOutSide = true, className = '', rootContainer = document.body, defaultShow = false }: ProtalOptions = {}) => {
	const [isShow, setShow] = useState(defaultShow);

	const handleClose = useCallback(() => {
		setShow(false);
	}, []);

	const handleShow = useCallback(() => {
		setShow(true);
	}, []);

	const Protal = useCallback(({children}: {children: React.ReactNode}) => {
		if (!isShow) return null;

		return ReactDOM.createPortal(
			<Wrap
				onClick={closeOnOutSide ? handleClose : () => {}} 
				className={className}>
				{children}
			</Wrap>, rootContainer
		)

	}, [isShow, className, rootContainer, closeOnOutSide])

	return {
		Protal,
		isShow,
		handleClose,
		handleShow
	}
};

export default useProtal;