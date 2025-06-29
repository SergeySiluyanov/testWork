/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from 'vue'
import { useAuthStore } from './auth'
import { defineStore } from 'pinia'
import templatesCanvas from '@/api/canvas-templates'

export const useTemplatesStore = defineStore('template', () => {
  const templatesList: any = ref([])
  const authStore = useAuthStore()

  const fetchTemplates = async (filter = {}) => {
    try {
      const response = await templatesCanvas.fetchTemplates(filter)
      authStore.isAuth = true
      templatesList.value = response
    } catch (err) {
      console.warn(err)
    }
  }

  const createTemplate = async (data: any) => {
    try {
      await templatesCanvas.createTemplate(data)

      fetchTemplates()
    } catch (err) {
      console.warn(err)

      return err
    }
  }

  const updateTemplate = async (data: any) => {
    try {
      await templatesCanvas.updateTemplate(data)

      fetchTemplates()
    } catch (err) {
      console.warn(err)

      return err
    }
  }

  const deleteTemplate = async (id: number) => {
    try {
      await templatesCanvas.deleteTemplate({ id: id })

      fetchTemplates()
    } catch (err) {
      console.warn(err)

      return err
    }
  }

  const fetchTemplateOne = async (value: string) => {
    try {
      const response = await templatesCanvas.fetchTemplateOne(value)
      return response
    } catch (err) {
      console.warn(err)
    }
  }

  return {
    templatesList,
    fetchTemplates,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    fetchTemplateOne,
  }
})
