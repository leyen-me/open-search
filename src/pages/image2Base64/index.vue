<template>
  <div class="image-to-base64">
    <section>
      <input type="file" @change="handleFileChange" />
      <textarea>
        {{ imgSrc }}
      </textarea>
    </section>
    <section>
      <img :src="imgSrc" alt="预览图" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
import { ref } from "vue";

let imgSrc = ref();

const convertImageToBase64 = function (file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result;
      resolve(base64String);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};

const copyTextToClipboard = function (text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      ElMessage.success("转换成功,已辅助到剪切板");
    })
    .catch((error) => {
      console.error("Failed to copy text to clipboard", error);
    });
};

const handleFileChange = function (event: any) {
  const files = event.target.files;
  for (const file of files) {
    convertImageToBase64(file)
      .then((base64String) => {
        imgSrc.value = base64String;
        copyTextToClipboard(base64String as string);
      })
      .catch((error) => {
        ElMessage.error("转换失败");
      });
  }
};
</script>

<style lang="scss" scoped>
p {
  white-space: pre;
}
.image-to-base64 {
  display: flex;
  height: 100%;
  section {
    flex: 1;
    height: 100%;
    overflow: hidden;
    border-right: 1px solid rebeccapurple;
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    textarea {
      width: 500px;
      min-height: 500px;
    }
  }
  section:last-child {
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
