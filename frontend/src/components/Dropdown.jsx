import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ isOpen, onClose, trigger, children, className = "" }) => {
	const dropdownRef = useRef(null);

	// Handle clicks outside dropdown
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen, onClose]);

	return (
		<div className="relative" ref={dropdownRef}>
			{trigger}
			{isOpen && (
				<>
					{/* Backdrop */}
					<div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
					{/* Dropdown content */}
					<div className={`absolute right-0 mt-2 bg-white shadow-lg rounded-md z-50 ${className}`}>
						{children}
					</div>
				</>
			)}
		</div>
	);
};

Dropdown.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	trigger: PropTypes.node.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default Dropdown;
