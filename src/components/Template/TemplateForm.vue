<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { useTemplatesStore } from '@/stores/templates'

const { form } = defineProps<any>()

const templatesStore = useTemplatesStore()
const emit = defineEmits(['close']);

const validationSchema = yup.object().shape({
  name: yup.string().required('Поле «Наименование» обязательное для заполнения'),
  height: yup.string().required('Поле «Высота» обязательное для заполнения'),
  width: yup.string().required('Поле «Ширина» обязательное для заполнения'),
})

const { handleSubmit } = useForm({
  validationSchema,
});
const name = useField('name', validationSchema);
const height = useField('height', validationSchema);
const width = useField('width', validationSchema);
const tags = useField('tags', validationSchema);
const preview_image: any = useField('preview_image', validationSchema);

const close = () => {
  emit('close')
}

const onSubmit = handleSubmit(async (values) => {
  const data = {
    ...values,
    tags: values.tags.split()
  }
  if(form.id) {
    templatesStore.updateTemplate({
      ...form,
      ...data,
    })
  } else {
    templatesStore.createTemplate(data)
  }
});

onMounted(() => {
  if(form.id) {
    name.value.value = form.name
    height.value.value = form.height
    width.value.value = form.width
    preview_image.value.value = form.preview_image
    tags.value.value = form.tags
  }
})
</script>

<template>
  <div class="form">
    <div class="form__header">
      <div class="form__title">Template</div>
      <v-btn
        icon="mdi-close"
        @click="close"
      />
    </div>
    <v-form validate-on="submit lazy" @submit.prevent="onSubmit">
      <v-text-field
        label="Наименование"
        v-model="name.value.value"
        :error-messages="name.errorMessage.value"
      />
      <v-text-field
        label="Высота"
        v-model="height.value.value"
        :error-messages="height.errorMessage.value"
      />
      <v-text-field
        label="Ширина"
        v-model="width.value.value"
        :error-messages="width.errorMessage.value"
      />
      <v-text-field
        label="Теги"
        v-model="tags.value.value"
        :error-messages="tags.errorMessage.value"
      />
      <v-file-input
        v-model="preview_image.value.value"
        accept="image/*"
        label="Изображение"
        show-size
      />

      <div class="form__actions">
        <v-btn type="submit" @click="onSubmit">Отправить</v-btn>
      </div>
    </v-form>
  </div>
</template>

<style lang="scss" scoped>
.form {
  padding: 20px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
