import cx from 'clsx'
import { Text } from '@mantine/core'
import { useListState } from '@mantine/hooks'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import classes from './DndList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import deletedTodos from '../../handlers/deletedTodos'

export function DndList() {
  const todos = useSelector((data) => data.todos)
  const dispatch = useDispatch()
  const [state, handlers] = useListState(todos)

  useEffect(() => {
    handlers.setState(todos)
  }, [todos])

  return (
    <div className={classes.dndWrapper}>
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          handlers.reorder({ from: source.index, to: destination?.index || 0 })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {state.map((item, index) => (
                <Draggable key={item.id} index={index} draggableId={item.id}>
                  {(provided, snapshot) => (
                    <div
                      className={cx(classes.item, {
                        [classes.itemDragging]: snapshot.isDragging,
                      })}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <div>
                        <Text c="dimmed" size="sm">
                          {item.todo}
                        </Text>
                      </div>
                      <div className={classes.btnWrapper}>
                        <img
                          className={classes.deletedImg}
                          src="./img/delete.png"
                          alt="delete button"
                          onClick={() => {
                            deletedTodos(item.id)
                            dispatch({ type: 'UPDATE' })
                          }}
                        />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
