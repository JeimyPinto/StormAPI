import PropTypes from 'prop-types';

export function Button({ text }) {
    return (
        <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold rounded p-4">
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};
