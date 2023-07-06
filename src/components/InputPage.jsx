import Input from "./Input";
import { MdPhone } from "react-icons/md";
import {MdLock} from "react-icons/md";
import Textarea from "./Textarea";
import Footer from "./Footer";
import InputIcon from "./InputIcon";

function InputPage() {
  return (
    <div className="py-12 px-4 lg:px-24 flex flex-col gap-10">
      <h1 className="text-[#4F4F4F] font-poppins text-2xl font-semibold">
        Inputs
      </h1>
      <Input
        name={"<Input default>"}
        placeholder="Placeholder"
        config="w-[200px] outline-[#828282] focus:outline-[#2962FF] hover:outline-black"
      />
      <Input
        name={"<Input error>"}
        placeholder="Placeholder"
        config="w-[200px] outline-[#D32F2F] focus:outline-[#D32F2F] hover:outline-black"
      />
      <Input
        name={"<Input disabled>"}
        placeholder="Placeholder"
        config="w-[200px] outline-[#E0E0E0] bg-[#F2F2F2] cursor-not-allowed"
        disabled={true}
      />
      <Input
        name={"<Input helperText='Some interesting text'>"}
        placeholder="Placeholder"
        config="w-[200px] outline-[#828282] focus:outline-[#D32F2F]"
        text="Some interesting text"
      />
      <div className="flex flex-col md:flex-row gap-10 md:gap-28">
        <InputIcon
          name={"<Input startIcon>"}
          icon={<MdPhone size={20} />}
          config="pl-10"
          configIcon="left-2 top-10"
        />
        <InputIcon
          name={"<Input endIcon>"}
          icon={<MdLock size={20} />}
          config="pr-8"
          configIcon="right-5 md:right-2 top-10"
        />
      </div>
      <Input
        name={"<Input value='text'>"}
        placeholder="Text"
        config="w-[200px] outline-[#828282] focus:outline-black placeholder-black"
      />
      <div className="flex flex-col md:flex-row gap-10 md:gap-28">
        <Input
          name={"<Input size='sm'>"}
          placeholder="Placeholder"
          config="w-[200px] outline-[#828282] focus:outline-black"
        />
        <Input
          name={"<Input size='md'>"}
          placeholder="Placeholder"
          config="w-[200px] outline-[#828282] focus:outline-black h-[56px]"
        />
      </div>
      <Input
        name={"<Input fullWidth>"}
        placeholder="Text"
        config="outline-[#828282] focus:outline-black w-full placeholder-black"
      />
      <Textarea />
      <Footer />
    </div>
  );
}

export default InputPage;
