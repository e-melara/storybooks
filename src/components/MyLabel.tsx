import "./MyLabel.css";

/**
 * Is this the principal call to action on the page?
 */

export interface MyLabelProps {
  /**
   * Este es el mensaje en el label
   */
  label: string;
  /**
   * Este es el tamaño del label (Default: normal)
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Esta propieda define si sera en mayuscula la palabra
   */
  allCaps: boolean;
  /**
   * El color del texto
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * Selecciona el color del texto
   */
  fontColor?: "string";
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}: MyLabelProps) => {
  return (
    <>
      <span
        className={["label", size, "text-" + color].join(" ")}
        style={{
          color: fontColor,
        }}
      >
        {allCaps ? label.toUpperCase() : label}
      </span>
    </>
  );
};

export default MyLabel;
