function Textarea() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-[#333333] font-noto text-sm md:text-base">
        {"<Input multiline row='4'>"}
      </h2>
      <div className="flex flex-col gap-2">
        <label className="font-noto text-xs text-[#333333]">Label</label>
        <textarea
          type="text"
          rows={4}
          placeholder="Placeholder"
          className="w-[200px] outline-[#828282] focus:outline-black px-2 py-3 rounded-md outline outline-2"
        />
      </div>
    </div>
  );
}

export default Textarea;
