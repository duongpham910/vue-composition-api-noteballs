<template>
  <div class="notes">

    <AddEditNote
      v-model="newNote"
      placeholder="Add a new note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <Note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
    />

  </div>
</template>

<script setup lang="ts">

/*
  imports
*/

  import { ref, type Ref } from 'vue'
  import Note from '@/components/Notes/Note.vue'
  import AddEditNote from '@/components/Notes/AddEditNote.vue'
  import { useStoreNotes } from '@/stores/storeNotes'
  import { useWatchCharacters } from '@/use/useWatchCharacters'

/*
  store
*/

  const storeNotes = useStoreNotes()

/*
  notes
*/

  const newNote: Ref<string> = ref('')
  const addEditNoteRef = ref<InstanceType<typeof AddEditNote> | null>(null)

  const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    if (addEditNoteRef.value) {
      addEditNoteRef.value.focusTextarea()
    }
  }

/*
  watch characters
*/

  useWatchCharacters(newNote)

</script>
