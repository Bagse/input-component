function InputIcon({ name, icon, config, configIcon }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-[#333333] font-noto text-sm md:text-base">{name}</h2>
      <div className="flex flex-col gap-2 relative">
        <label className="font-noto text-xs text-[#333333]">Label</label>
        <span className={`${configIcon} absolute transform`}>{icon}</span>
        <input
          type="text"
          placeholder="Placeholder"
          className={`${config} w-[200px] outline-[#828282] focus:outline-black px-2 py-3 rounded-md outline outline-2`}
        />
        <span className={`${configIcon} absolute transform`}>{icon}</span>
      </div>
    </div>
  );
}

export default InputIcon;
