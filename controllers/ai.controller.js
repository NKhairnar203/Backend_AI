import * as ai from "../services/ai.service.js";

export const getResult = async (req, res) => {
  try {
    const { input } = req.body;
    const result = await ai.generateResult(input);
    res.send({ message: result, user: "AI" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
