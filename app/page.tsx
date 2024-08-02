'use client'
import { z } from "zod"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFieldArray } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Tiptap from "@/components/ui/Tiptap"

const page = () => {

  const formSchema = z.object({

    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    password: z.string(),
    description: z.string(),
    artistInfo: z.array(z.object({
      name: z.string(),
      url: z.string()
    }))

  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  const { fields: artistsFields, append } = useFieldArray({
    name: "artistInfo",
    control: form.control
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field: { name, onBlur, onChange, ref, value, disabled } }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" name={name} onBlur={onBlur} ref={ref} value={value} disabled={disabled} onChange={(e) => {
                    onChange(e.target.value)
                  }} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field: { name, onBlur, onChange, ref, value, disabled } }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" name={name} onBlur={onBlur} ref={ref} value={value} disabled={disabled} onChange={(e) => {
                    onChange(e.target.value)
                  }} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field: { name, onBlur, onChange, ref, value, disabled } }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" name={name} onBlur={onBlur} ref={ref} value={value} disabled={disabled} onChange={(e) => {
                    onChange(e.target.value + '0')
                  }} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field: { name, onBlur, onChange, ref, value, disabled } }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Tiptap description={""} onChange={onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {

            artistsFields.map((f, id) => {
              return (
                <div>
                  <FormField
                    control={form.control}
                    name={`artistInfo.${id}.name`}
                    render={({ field: { name, onBlur, onChange, ref, value, disabled } }) => (
                      <FormItem>
                        <FormLabel>Artist url</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" name={name} onBlur={onBlur} ref={ref} value={value} disabled={disabled} onChange={(e) => {
                            onChange(e.target.value)
                          }} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`artistInfo.${id}.url`}
                    render={({ field: { name, onBlur, onChange, ref, value, disabled } }) => (
                      <FormItem>
                        <FormLabel>Artist name</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" name={name} onBlur={onBlur} ref={ref} value={value} disabled={disabled} onChange={(e) => {
                            onChange(e.target.value + '0')
                          }} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )
            })

          }

          <Button onClick={() => {
            append({
              name: "",
              url: ""
            })
          }} className="block">Add artist</Button>

          {/* <div>
            <FormField
              control={form.control}
              name="artistInfo.0.name"
              render={({ field: { name, onBlur, onChange, ref, value, disabled } }) => (
                <FormItem>
                  <FormLabel>Artist url</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" name={name} onBlur={onBlur} ref={ref} value={value} disabled={disabled} onChange={(e) => {
                      onChange(e.target.value + '0')
                    }} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="artistInfo.0.url"
              render={({ field: { name, onBlur, onChange, ref, value, disabled } }) => (
                <FormItem>
                  <FormLabel>Artist name</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" name={name} onBlur={onBlur} ref={ref} value={value} disabled={disabled} onChange={(e) => {
                      onChange(e.target.value + '0')
                    }} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            /> 
          </div> */}


          <Button type="submit" className="block">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default page