import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center"
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular
  }
}));
const dataList = [
  {
    id: 1,
    head: "Terrific material lifting machines",
    desc:
      "Equipment Rentals India works efficiently for the construction equipment buyers and sellers who aim at becoming the largest aggregator of the machines. Crawler Crane, Hydraulic Crane, Overhead Crane, Tower Crane, Telescopic Crane, Jib Crane and Mobile Crane are different types of cranes available at Equipment Rentals India. We are situated in cities like Pune, Ahmedabad, Jaipur, Chandigarh, et al. Construction equipment suppliers can upload the pictures of the equipment on our website, while the buyers can browse for the needed equipment and enquire for the same."
  },
  {
    id: 2,
    head: "Sturdy earth digging equipments",
    desc:
      "Equipment Rentals India helps a buyer meet the seller, to buy or rent used construction machinery, through the online web portal. The contractor can sell, purchase, rent, or put their construction equipment on lease. Earthmoving equipment is categorised as Excavators, Loaders, Dumpers, Backhoe Loaders. Contractors can buy used earthmoving construction equipment from Delhi, Mumbai, Bangalore, Chennai, and across India. Equipment Rentals India provides the contractors with machines on rent to avoid purchasing heavy costing machines and complete their projects, efficiently. Register at www.equipmentrentalsindia.com for sale or purchase of your earthmoving equipment."
  },
  {
    id: 3,
    head: "Robust equipments to pave the road!",
    desc:
      "Equipment Rentals India provides road construction machinery like Motor Grader, Paver, Soil Compactor, Pneumatic tyred roller, Asphalt mixing plant, Crawler excavator and Piling Rigs to its registered users on sale and rent. The company allows the sellers to upload their road construction equipments on the website for sale or resale. Contractors from different cities like Assam, Mumbai, Hyderabad, Kolkata show their interest in renting or purchasing road construction equipments from across India. The road construction equipment buyers and sellers can register at www.equipmentrentalsindia.com to reach out the constructors around the country."
  },
  {
    id: 4,
    head: "Delivering concreting equipments all over",
    desc:
      "Equipment Rentals India allows the contractors to register on the website and upload their concreting equipment like Concrete Pump, Boom placer pump, Transit Mixer, Shotcrete machine, Groove cutter, Hammer drills and Ajax Fiori for their registered buyers to rent or purchase the machine. The platform lets the user put an enquiry to buy or rent used and new concreting equipment. The portable concreting equipment is used for projects in Sikkim, West Bengal, Ranchi, Indore, Bhopal from across India. You can register at www.equipmentrentalsindia.com to browse the latest machines and get it on lease to complete your constructing project."
  },
  {
    id: 5,
    head: "Durable concrete mixing machineries",
    desc:
      "Equipment Rentals India has an array of plants like Crusher, Concrete batching plant, wet mix plant, Mobile concrete batching plant and hot mix plant for contractors to purchase or hire them. While on the other hand, the suppliers can upload the pictures of their used and new equipments on the website to reach out to the contractors. Construction projects are highly depended on construction plants as heavy machinery is used for the same. Equipment Rentals India lets you rent/ sale or resale the equipments in various cities like Surat, Bhopal, Bhubaneswar, Nasik, Gwalior, et al."
  },
  {
    id: 6,
    head: "All equipments at one place",
    desc:
      "Apart from the common and much-used construction equipment, there are furthermore machines used for construction provided by Equipment Rentals India. The equipment falling in this category are Forklift, Generator, Light Tower, Manlift, Pneumatic roller, Grader repair and Vibrodriver. The contractor can register at Equipment Rentals India and increase his clientage, grow his business, and complete his construction projects on time. The miscellaneous construction equipment ranges from the heavy and portable and lighter equipment to make the job easier and quicker. Register with Equipment Rentals India to sell, purchase, rent, or hire the construction equipment."
  }
];
export default function ListContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography component="h2" variant="h4" color="primary" gutterBottom>
        India's Largest Construction Equipment Inventory
      </Typography>
      <br />

      {dataList.map((data) => {
        return (
          <Accordion key={data.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{data.head}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="textSecondary">
                {data.desc}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
