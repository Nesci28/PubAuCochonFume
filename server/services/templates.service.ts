// Interfaces
import { Template } from "../interfaces/template.interface";

// Models
import template from "../models/template.model";

class TemplatesService {
  constructor() {}

  async getTemplate(templateId: string): Promise<Template | undefined> {
    return (template.findOne(
      { templateId },
      { __v: 0, createdAt: 0, updatedAt: 0, _id: 0, templateId: 0 }
    ) as unknown) as Template | undefined;
  }

  async updateTemplate(
    templateId: string,
    elementId: string,
    data: string
  ): Promise<Template> {
    return template.updateOne(
      { templateId },
      { $set: { [elementId]: data } },
      { upsert: true }
    );
  }
}

export default new TemplatesService();
