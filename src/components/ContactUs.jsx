import { Input } from './base/Input';
import { Button } from './base/Button';
import { TextArea } from './base/Textarea';

const ContactUs = () => {
  return (
    <div className="flex justify-center flex-col mt-10 py-5 lg:w-[80%] sm:w-[600px] w-full text-white sm:p-0 px-10">
         <h4 className="text-center font-normal tracking-[1px] uppercase">
             Contact us
         </h4>

         <div className="text-center py-3 sm:text-[1.6rem] text-xl font-semibold">
             We’d love to hear from <span className="text-[#D9BF4F] underline">you</span>
         </div>
 
         <div className="text-center text-sm pt-3">
             Reach out to us for further discussions about sponsorship and partnership opportunities
         </div>

         <div className="flex justify-between flex-col">
             <div className="flex w-full justify-between sm:flex-row flex-col sm:space-x-5 py-5">
                <div className="w-full">
                   <div className="text-sm py-1">Name</div>
                   <Input/>
                </div>

                <div className="w-full sm:py-0 pt-7">
                  <div className="text-sm py-1">E-mail</div>
                  <Input type="email"/>
                </div>
            </div>

            <div className="w-full py-5">
               <div className="text-sm py-1">Subject</div>
               <Input/>
             </div>

             <div className="w-full py-5">
               <div className="text-sm py-1">Purpose</div>
               <TextArea/>
             </div>

             <div className="flex w-full py-5 justify-center">
                <Button className="flex items-center text-gpgp-blue px-10 py-2 bg-white uppercase">
                   Send
                </Button>
             </div>
         </div>
    </div>
  )
}

export default ContactUs;
