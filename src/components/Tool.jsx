import PropTypes from "prop-types";

export default function Tool({ name }) {
  return (
    <div className="w-fit rounded-full bg-blue-500 px-3 py-2">
      <p className="text-inter-700 text-xs text-slate-950">{name}</p>
    </div>
  );
}

Tool.propTypes = {
  name: PropTypes.string.isRequired,
};
