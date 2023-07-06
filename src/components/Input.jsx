function Input({ name, config, disabled, text, placeholder }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-[#333333] font-noto text-sm md:text-base">{name}</h2>
      <div className="flex flex-col gap-2">
        <label className="font-noto text-xs text-[#333333]">Label</label>
        <input
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          className={`${config} px-2 py-3 rounded-md outline outline-2`}
        />
        <span className="text-[#828282] font-noto text-[10px]">{text}</span>
      </div>
    </div>
  );
}

export default Input;
