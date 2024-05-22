import Swal, { type SweetAlertOptions } from 'sweetalert2'

export default defineNuxtPlugin((nuxtApp) => {
  const $swal: any = Swal.mixin({
    denyButtonText: 'Não',
    cancelButtonText: 'Cancelar',
    closeButtonAriaLabel: 'Fechar está janela',
    confirmButtonColor: '#4fad32',
    denyButtonColor: '#F1595C',
    cancelButtonColor: '#6d6d6d',
  })

  $swal.success = (props: SweetAlertOptions) => {
    return $swal.fire({
      title: 'Sucesso',
      icon: 'success',
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true, 
      didOpen: (toast: any) => {
        toast.addEventListener('mouseenter', $swal.stopTimer)
        toast.addEventListener('mouseleave', $swal.resumeTimer)
      },
      ...props,
    })
  }
  
  $swal.error = (props: SweetAlertOptions) => {
    return $swal.fire({
      title: 'Erro',
      icon: 'error',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      didOpen: (toast: any) => {
        toast.addEventListener('mouseenter', $swal.stopTimer)
        toast.addEventListener('mouseleave', $swal.resumeTimer)
      },
      ...props,
    })
  }
  
  $swal.confirm = (props: SweetAlertOptions) => {
    return $swal.fire({
      text: 'Você tem certeza?',
      icon: 'question',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !$swal.isLoading(),
      ...props,
    })
  }
  
  $swal.confirmRemove = (props: SweetAlertOptions) => {
    return $swal.fire({
      text: 'Você tem certeza?',
      icon: 'question',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      confirmButtonText: 'Sim remover',
      confirmButtonColor: '#F1595C',
      showLoaderOnConfirm: true,      
      allowOutsideClick: () => !$swal.isLoading(),
      customClass: {
        // ...customClass,
        confirmButton: 'error',
      },
      ...props,
    })
  }
  
  $swal.loading = (props: SweetAlertOptions) => {
    return $swal.fire({
      didOpen: () => {
        $swal.showLoading()
      },
      title: 'Carregando...',
      showCancelButton: false,
      showCloseButton: false,
      allowOutsideClick: () => !$swal.isLoading(),
      customClass: {
        // ...customClass,
        title: 'mt-10',
        actions: 'mb-10',
      },
      ...props,
    })
  }
  
  nuxtApp.provide('swal', $swal)
})
