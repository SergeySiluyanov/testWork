/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '@/core/axios'
import type { TCanvasTemplatesItem } from './models/canvas-templates'

export class TemplatesCanvas {
  async fetchTemplates(query?: any) {
    const { data } = await axios.get<Promise<TCanvasTemplatesItem[]>>('/api/v1/canvas_templates/')

    return data
  }

  async fetchTemplateOne(id?: string) {
    const response = await axios.get<Promise<any>>(`/api/v1/canvas_templates/${id}`)

    return response
  }

  async createTemplate(data: any) {
    const response = await axios.post<Promise<any>>('/api/v1/canvas_templates', {
      data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return response
  }

  async deleteTemplate(params: any) {
    await axios.delete<Promise<any>>('/api/v1/canvas_templates', {
      params,
    })
  }

  async updateTemplate(data: any) {
    const response = await axios.post<Promise<any>>('/api/v1/canvas_templates', {
      data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return response
  }
}

export default new TemplatesCanvas()
