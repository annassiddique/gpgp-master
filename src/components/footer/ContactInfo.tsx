const ContactInfo = () => {
  return (
    <div className="grid grid-cols-2 gap-x-2 text-white md:mt-[30px]">
      <div>
        <h4 className="font-normal">Sitemap</h4>
        <ul className="text-sm space-y-4 [&>*:first-child]:pt-5">
          <li>Project</li>
          <li>Challenge</li>
        </ul>
      </div>

      <div>
        <h4 className="font-normal">Contact</h4>

        <ul className="text-sm space-y-4 [&>*:first-child]:pt-5">
          <li>infinart@risidio.com</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
