import Persona from "../../../models/Persona";

export const createPersona = async (_, { input })=> {
      const newPersona = new Persona(input);
      await newPersona.save();
      return newPersona;
}