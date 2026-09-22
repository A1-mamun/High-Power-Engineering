/**
 * Centralized react-icons export to replace lucide-react usage across the app.
 * Re-exports commonly used icons under the same names used by lucide-react
 * so existing component code can switch with minimal change.
 */
import type { IconType } from "react-icons";

// Social / brand
export {
  FaFacebookF as Facebook,
  FaTwitter as Twitter,
  FaYoutube as Youtube,
  FaLinkedinIn as Linkedin,
  FaInstagram as Instagram,
} from "react-icons/fa";

// Contact
export {
  FaPhoneAlt as Phone,
  FaEnvelope as Mail,
  FaMapMarkerAlt as MapPin,
  FaWhatsapp as MessageCircle,
} from "react-icons/fa";

// UI / navigation (Feather icons — same look as lucide)
export {
  FiMenu as Menu,
  FiX as X,
  FiChevronDown as ChevronDown,
  FiChevronUp as ChevronUp,
  FiChevronLeft as ChevronLeft,
  FiChevronRight as ChevronRight,
  FiArrowRight as ArrowRight,
  FiArrowLeft as ArrowLeft,
  FiSend as Send,
  FiPlay as Play,
  FiSearch as Search,
  FiUser as User,
  FiSettings as Settings,
  FiGlobe as Globe2,
  FiTarget as Target,
  FiAward as Award,
  FiUsers as Users,
  FiStar as Star,
} from "react-icons/fi";

// Industrial / power / services (from FontAwesome + Gi set)
import {
  FaBolt,
  FaIndustry,
  FaBuilding,
  FaCog,
  FaCouch,
  FaPlug,
  FaTools,
  FaClipboardCheck,
  FaCubes,
} from "react-icons/fa";
import {
  GiPowerLightning,
  GiElectricalSocket,
  GiWindTurbine,
  GiPowerGenerator,
} from "react-icons/gi";

export const Zap = FaBolt;
export const Factory = FaIndustry;
export const Building2 = FaBuilding;
export const Cog = FaCog;
export const Wind = GiWindTurbine;
export const Sofa = FaCouch;
export const Plug = FaPlug;
export const Power = GiPowerLightning;
export const Settings2 = FaTools;
export const Wrench = FaTools;
export const ClipboardCheck = FaClipboardCheck;
export const PanelsTopLeft = GiElectricalSocket;

export type { IconType };
